// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import MyGoogleMap from "../../google-map/google-map";
// import { ToastContainer, toast } from "react-toastify";
// import { plans } from "@/app/lib/plansData";

// const initialClientState = { name: '', address: '', plan: {} as Plan, description: '' };

// export const NewClient = (selectedPlan: Plan) => {
//     const [client, setClient] = useState<Client>(initialClientState);
//     const [agreeTerms, setAgreeTerms] = useState(false);
//     const [planColor, setPlanColor] = useState('');

//     const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<Client>({
//         defaultValues: initialClientState,
//         mode: 'onChange',
//     });

//     const watchPlan = watch("plan.name");


//     const checkboxHandler = () => {
//         setAgreeTerms(!agreeTerms);
//     };

//     const onSubmit = async (data: Client) => {
//         fetch('/api/client/create', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log('Success:', data);
//                 // Handle success here (e.g., showing a success message)
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 // Handle errors here (e.g., showing an error message)
//             });
//     };

//     const handleMarkerPlaced = (latLng: google.maps.LatLngLiteral) => {
//         const geocoder = new google.maps.Geocoder();
//         geocoder.geocode({ location: latLng }, (results, status) => {
//             if (status === 'OK' && results && results[0]) {
//                 setValue('address', results[0].formatted_address); // Update address field directly with react-hook-form
//             } else {
//                 window.alert('No results found or Geocoder failed due to: ' + status);
//                 // Consider using react-toastify here for consistency in error messaging
//             }
//         });
//     };

//     const handlePlanSelect = (data: any) => {
//         const planName = data.target.value;
//         const planPicked = plans.find((plan) => plan.name === planName);
//         setPlanColor(planPicked?.color ?? '');
//     }

//     useEffect(() => {
//         if (selectedPlan) {
//             setValue('plan', selectedPlan); // Use setValue from react-hook-form to update plan
//             setPlanColor(selectedPlan.color);
//         }
//     }, [selectedPlan, setValue, setPlanColor]);

//     return (
//         <>
//             <form
//                 className="max-w-lg mx-auto p-4 m-8 bg-white shadow-md rounded-lg w-[60%]"
//                 onSubmit={handleSubmit(onSubmit)}
//             >
//                 <div className="mb-6">
//                     <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Име<span className="text-red-500">*</span></label>
//                     <input
//                         {...register('name', { required: 'Две имена са задължително поле!' })}
//                         id="name"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                         placeholder="Две имена" />
//                     {errors.name && <p className="error font-bold text-red-500">{errors.name.message?.toString()}</p>}
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="plan-select" className="block mb-2 text-sm font-medium text-gray-700">План<span className="text-red-500">*</span></label>
//                     <select
//                         {...register('plan.name', { required: 'Изборът на план е задължителен!' })}
//                         id="plan-select"
//                         className={`border bg-gray-50 rounded shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
//                         block w-full p-2.5 ${planColor}`}
//                         onChange={handlePlanSelect}
//                     >
//                         <option value="" className="bg-white">Моля, изберете план...</option>
//                         {plans.map((plan, index) => (
//                             <option value={plan.name} key={index} className={plan.color}>{plan.name}</option>
//                         ))}
//                     </select>
//                     {errors.plan && <p className="error font-bold text-red-500">{errors.plan.message?.toString()}</p>}
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Адрес<span className="text-red-500">*</span></label>
//                     {errors.address && <p className="error font-bold text-red-500">{errors.address.message?.toString()}</p>}
//                     <input
//                         {...register('address', { required: 'Адресът е задължителен!' })}
//                         id="address"
//                         type="text"
//                         readOnly // Make sure to instruct users on how to fill this field, i.e., selecting a location on the map
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
//                         placeholder="Адрес"
//                     />
//                     <MyGoogleMap onMarkerPlaced={handleMarkerPlaced} />
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Описание</label>
//                     <textarea
//                         {...register('description')}
//                         id="description"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                         placeholder="Описание"
//                     ></textarea>
//                 </div>
//                 <div className="mb-4">
//                     <input type="checkbox" id="agree" onChange={checkboxHandler} />
//                     <label htmlFor="agree"> Съгласявам се с <b>общите условия</b></label>
//                 </div>
//                 <div className="mb-4">
//                     <button disabled={!agreeTerms} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
//                         disabled:bg-gray-300"
//                         type="submit">
//                         Заяви
//                     </button>
//                 </div>
//             </form>
//         </>
//     );
// };

// export default NewClient;
