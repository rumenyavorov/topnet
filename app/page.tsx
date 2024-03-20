'use client';

import { useState } from "react";
import Navbar from "./ui/home/navbar/navbar";
import NewClient from "./ui/home/section/new-client/new-client";
import Plan from "./ui/home/section/plan/plans";
import Section from "./ui/home/section/section";
import { Incident } from "./ui/home/section/incident/incident";
import { PlanCard } from "./ui/home/section/plan/plan-card";
import { AboutUs } from "./ui/home/section/about-us/about-us";
import Wizard from "./ui/home/section/new-client/wizard";

export default function Home() {

  const [selectedPlan, setSelectedPlan] = useState<Plan>();

  return (
    <main >
      <Navbar />

      <div>
        <Section id="about-us" title="" color="bg-blue-200">
          <AboutUs />
        </Section>
        <Section id="plans" title="Планове" color="bg-blue-200">
          <Plan selectPlan={setSelectedPlan} />
        </Section>
        <Section id="new" title="За връзване" color="bg-blue-200">
          {/* <NewClient id={selectedPlan?.id ?? 0} name={selectedPlan?.name ?? ""} color={selectedPlan?.color ?? ""} speed={0} channels={""} price={""} features={[]} /> */}
          <Wizard />
        </Section>
        <Section id="incidents" title="Аварии" color="bg-blue-200">
          <Incident />
        </Section>
        <Section id="contacts" title="Контакти" color="bg-blue-200">
        </Section>
      </div>
    </main>
  );

}
