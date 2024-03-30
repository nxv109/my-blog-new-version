type TEndpoint = string;

type TFetchAppParams = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  endpoint: `/${TEndpoint}`;
  [configKey: string]: any;
};

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

async function fetchApp({
  endpoint,
  method = 'GET',
  ...config
}: TFetchAppParams) {
  try {
    const response = await fetch(`${baseApiUrl}/${endpoint}`, {
      method,
      ...config,
    });

    return response.json();
  } catch (error) {
    return error;
  }
}

export default fetchApp;
