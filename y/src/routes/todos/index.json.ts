import type {RequestHandler} from "@sveltejs/kit";
import {api} from "./_api";

export const get = (request) => {
  return api(request);
}

export const post = async (request) => {
  const data = await request.request.formData();
  return api(request, {
    uid: `${Date.now()}`,  // TODO replace this with uid from data base
    created_at: new Date(),
    text: data.get("text").toString(),
    done: false
  });
}