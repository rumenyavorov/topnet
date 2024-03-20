import { useState } from "react";
import { useForm } from "react-hook-form";
import MyGoogleMap from "../../google-map/google-map";

export const Incident = () => {
  const [incident, setIncident] = useState<Incident>({
    name: '',
    address: '',
    description: '',
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const handleMarkerPlaced = (latLng: google.maps.LatLngLiteral) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        setValue('address', results[0].formatted_address); // Update address field directly with react-hook-form
      } else {
        window.alert('No results found or Geocoder failed due to: ' + status);
      }
    });
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 m-8 bg-white shadow-md rounded-lg w-[60%]"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Име<span className="text-red-500">*</span></label>
        <input
          {...register('name', { required: 'Две имена са задължително поле!' })}
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Две имена" />
        {errors.name && <p className="error font-bold text-red-500">{errors.name.message?.toString()}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Адрес<span className="text-red-500">*</span></label>
        {errors.address && <p className="error font-bold text-red-500">{errors.address.message?.toString()}</p>}
        <input
          {...register('address', { required: 'Адресът е задължителен!' })}
          id="address"
          type="text"
          readOnly // Make sure to instruct users on how to fill this field, i.e., selecting a location on the map
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          placeholder="Адрес на който е локализирана аварията"
        />
        <MyGoogleMap onMarkerPlaced={handleMarkerPlaced} />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Описание<span className="text-red-500">*</span></label>
        <textarea
          {...register('description', { required: 'Описание е задължително поле!' })}
          id="description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Описание"
        ></textarea>
        {errors.name && <p className="error font-bold text-red-500">{errors.name.message?.toString()}</p>}
      </div>

      <div className="mb-4">
        <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                        disabled:bg-gray-300"
          type="submit">
          Заяви
        </button>
      </div>
    </form>
  );
}