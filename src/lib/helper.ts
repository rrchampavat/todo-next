const API_URL = process.env.API_URL;

export const getAll = async (table: string) => {
  const res = await fetch(`${API_URL}/${table}`, {
    method: "GET",
    cache: "no-store",
    next: { revalidate: 0, tags: ["collections"] },
  });

  const data = await res.json();

  return data;
};

export const getSingle = async (params: GetByIdPayload) => {
  const { table, id } = params;

  const res = await fetch(`${API_URL}/${table}/${id}`, {
    method: "GET",
    cache: "no-store",
    next: { revalidate: 0, tags: ["collections"] },
  });

  const data = await res.json();

  return data;
};

export const getSingleClient = async (params: GetByIdPayload) => {
  const { table, id } = params;

  const res = await fetch(`/api/${table}/${id}`);

  const data = await res.json();
  return data;
};

export const updateData = async (params: UpdatePayload) => {
  const { body, id, table } = params;

  const res = await fetch(`${API_URL}/${table}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    next: { revalidate: 0, tags: ["collections"] },
  });

  return res;
};

export const updateDataClient = async (params: UpdatePayload) => {
  const { body, id, table } = params;

  const res = await fetch(`/api/${table}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    next: { revalidate: 0, tags: ["collections"] },
  });

  return res;
};
