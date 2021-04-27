import { message } from "antd";

export function submitUpdate(
  post,
  fields,
  user,
  history,
  id,
  setLoading
) {
  const formValues = {};
  
    fields &&
      fields.forEach((field) => {
        return (formValues[field.name[0]] = field.value);
      });

    if (!user) return null;

    formValues.userId = user.userId;
    {
      setLoading(true);
      fetch("https://wallapp-api-e7762.web.app/posts/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((result) => result.json())
        .then((data) => {
          setLoading(false);
          message.success("Post Updated.");
          return history.push(`/`)
        })
        .catch(() => setLoading(false));
    }
    
  }


export function getSinglePost(id, setPost) {
  fetch(`https://wallapp-api-e7762.web.app/post/${id}`)
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((error) => console.log(error));
  console.log({ id }, "getsinglepost id");
}
