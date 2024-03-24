import { useState, useEffect, useRef, useCallback } from 'react';
import { ClientWithStatus, fetchClientsTodo, fetchClientsTodoPages } from "@/app/lib/db/clients";

const ITEMS_PER_SCROLL = 7;

export default function useInfiniteScroll(query: string) {
  const [clients, setClients] = useState<ClientWithStatus[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getTotalPages = async () => {
      const totalItems = await fetchClientsTodoPages(query, currentPage);
      const pages = Math.ceil(totalItems / ITEMS_PER_SCROLL);
      setTotalPages(pages);
    };

    getTotalPages();
  }, [query]);

  const loadClients = useCallback(async () => {
    if (isFetching || currentPage >= totalPages) return;

    setIsFetching(true);
    const newClients = await fetchClientsTodo(query, currentPage);
    setClients(prev => [...prev, ...newClients]);
    setIsFetching(false);
    setCurrentPage(prevPage => prevPage + 1);
  }, [query, currentPage, totalPages, isFetching]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isFetching) {
        loadClients();
      }
    }, {
      root: scrollContainerRef.current,
      rootMargin: '200px', // Increase rootMargin to load before scrolling to the end
      threshold: 0,
    });

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, [loadClients]);

  return { clients, isFetching, scrollContainerRef };
};