export const getSavedMedia = () => {
    return JSON.parse(localStorage.getItem("savedMedia")) || [];
  };
  
  export const saveMedia = (item) => {
    const saved = getSavedMedia();
  
    // avoid duplicate
    const exists = saved.find(
      (m) => m.id === item.id && m.type === item.type
    );
    if (exists) return;
  
    saved.push(item);
    localStorage.setItem("savedMedia", JSON.stringify(saved));
  };
  
  export const removeMedia = (id) => {
    const saved = getSavedMedia().filter(item => item.id !== id);
    localStorage.setItem("savedMedia", JSON.stringify(saved));
  };
  




  