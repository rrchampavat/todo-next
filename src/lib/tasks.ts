import { supabase } from "./supabaseClient";

export async function getTasks() {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select()
      .order("id", { ascending: true });

    if (error) {
      throw error;
    }

    if (data) {
      return {
        data: data,
      };
    }
  } catch (error: any) {
    alert(error.message);
  }
}

export const addTask = async (props: any) => {
  try {
    const { title, description } = props;

    const res = await supabase
      .from("tasks")
      .insert([
        {
          title: title,
          description: description,
        },
      ])
      .single();

    if (res.error) {
      throw res.error;
    }

    return {
      data: res.data,
    };
  } catch (error: any) {
    alert(error.message);
  }
};

export const getTask = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select()
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export const updateTask = async (task: any) => {
  try {
    const { id, title, desc, isCompleted } = task;

    const { data, error } = await supabase
      .from("tasks")
      .update({ title: title, description: desc, isCompleted: isCompleted })
      .eq("id", id);

    if (error) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export const deleteTask = async (id: number) => {
  try {
    const { data, error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error: any) {
    alert(error.message);
  }
};
