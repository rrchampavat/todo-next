const API_URL = process.env.API_URL;

export const getAll = async (table: string) => {
  const res = await fetch(`${API_URL}/${table}`, { cache: "no-cache" });
  //
  const data = await res.json();

  return data;
};

export const getSingle = async (params: GetByIdPayload) => {
  const { table, id } = params;

  const res = await fetch(`${API_URL}/${table}/${id}`, { cache: "no-cache" });

  const data = await res.json();

  return data;
};

export const getSingleClient = async (params: GetByIdPayload) => {
  const { table, id } = params;

  const res = await fetch(`/api/${table}/${id}`, { cache: "no-cache" });

  const data = await res.json();
  return data;
};

export const updateData = async (params: UpdatePayload) => {
  const { body, id, table } = params;

  const res = await fetch(`${API_URL}/${table}/${id}`, {
    method: "PUT",
    cache: "no-cache",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export const updateDataClient = async (params: UpdatePayload) => {
  const { body, id, table } = params;

  const res = await fetch(`/api/${table}/${id}`, {
    method: "PUT",
    cache: "no-cache",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};
