const fetchHelper = async (url: string) => {
  try {
    const resp = await fetch(url);
    const response = await resp.json();
    return response.data;
  } catch (err) {
    console.log("err ", err);
  }
};

export { fetchHelper };
