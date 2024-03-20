'use client';

import Link from "next/link";
import { Button } from "../../button";
import MyGoogleMap from "../../home/google-map/google-map";
import { CheckIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { plans } from "@/app/lib/plansData";
import { useFormState } from "react-dom";
import { State, createClient, updateClient } from "@/app/lib/actions";
import { useState } from "react";

export default function EditClientForm({
    client
}: {
    client: Client
}) {
    const initialState = { message: null, errors: {} } as State;
    const updateClientWithId = updateClient.bind(null, client.id);
    const [state, dispatch] = useFormState(updateClientWithId, initialState);
    const [address, setAddress] = useState(client?.address || '');

    const plansData = plans;

    const handleMarkerPlaced = (latLng: google.maps.LatLngLiteral) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === 'OK' && results && results[0]) {
                setAddress(results[0].formatted_address);
            } else {
                window.alert('No results found or Geocoder failed due to: ' + status);
            }
        });
    };

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Full name */}
                <div className="mb-4">
                    <div className="flex flex-row justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                                Име
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Име"
                                className="w-full rounded-md border py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="firstName-error"
                                defaultValue={client.firstName}
                            />
                            <div id="firstName-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.firstName &&
                                    state.errors.firstName.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                                Фамилия
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Фамилия"
                                className="w-full rounded-md border py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="lastName-error"
                                defaultValue={client.lastName}
                            />
                            <div id="lastName-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.lastName &&
                                    state.errors.lastName.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Plan */}
                <div
                    className="mb-4"
                >
                    <label htmlFor="plans" className="mb-2 block text-sm font-medium">
                        План
                    </label>
                    <select
                        id="plans"
                        defaultValue={client.plan}
                        name="plan"
                        className="w-full border rounded-md py-2 pl-2 text-sm outline-2 focus:border-blue-300 focus:ring-blue-300"
                        aria-describedby="plan-error"
                    >

                        <option value="" disabled>
                            Моля, изберете план
                        </option>
                        {plansData.map((plan) => (
                            <option key={plan.id} value={plan.name}>
                                {plan.name}
                            </option>
                        ))}
                    </select>
                    <div id="plan-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.plan &&
                            state.errors.plan.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                {/* Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Състояние
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="pending"
                                    name="status"
                                    type="radio"
                                    value="pending"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                    defaultChecked={client.status === 'pending'}
                                />
                                <label
                                    htmlFor="pending"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Заявен <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="new"
                                    name="status"
                                    type="radio"
                                    value="new"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                    defaultChecked={client.status === 'new'}
                                />
                                <label
                                    htmlFor="new"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    За връзване <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="done"
                                    name="status"
                                    type="radio"
                                    value="done"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                    defaultChecked={client.status === 'done'}
                                />
                                <label
                                    htmlFor="done"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Вързан <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="rejected"
                                    name="status"
                                    type="radio"
                                    value="rejected"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                    defaultChecked={client.status === 'rejected'}
                                />
                                <label
                                    htmlFor="rejected"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Отхвърлен <XCircleIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                            state.errors.status.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </fieldset>

                {/* Description */}
                <div className="mb-4 mt-4">
                    <div className="flex flex-row justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="description" className="mb-2 block text-sm font-medium">
                                Описание
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Описание"
                                rows={4}
                                defaultValue={client?.description}
                                className="w-full rounded-md border py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                </div>
                {/* Address */}
                <div className="mb-6">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Адрес<span className="text-red-500">*</span></label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                        placeholder="Адрес"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        aria-describedby="address-error"
                    />
                    <div id="address-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.address &&
                            state.errors.address.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <MyGoogleMap onMarkerPlaced={handleMarkerPlaced} />
                </div>

            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                {state.message &&
                    <p className="mt-2 text-sm text-red-500" key={state.message}>
                        {state.message}
                    </p>
                }
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/clients"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Отказ
                </Link>
                <Button type="submit">Редактирай</Button>
            </div>
        </form>
    );
};