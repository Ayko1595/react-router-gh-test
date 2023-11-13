import { LoaderFunction, useLoaderData } from "react-router-dom";


export const loader: LoaderFunction = async ({
	request,
}): Promise<string> => {
	const url = new URL(request.url);
	return url.toString();
};

const Test = () => {
	const text = useLoaderData();

    console.log('TEST', text);
  return (
    <div>
      <h1>This is another fun Test Component that was built with yarn</h1>
      <p>Welcome to the Test component!</p>
    </div>
  );
};

export default Test;
