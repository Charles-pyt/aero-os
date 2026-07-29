const textarea = document.querySelector("#notepad-textarea");

if (textarea) {
  const savedNote = localStorage.getItem("aero_os_note");
  if (savedNote) {
    textarea.value = savedNote;
  }

  textarea.addEventListener("input", () => {
    localStorage.setItem("aero_os_note", textarea.value);
  });
}