// Fetch request for text content, can be reused for artist pages, current issues with displaying data
// see about section (after run dev) for details, shows in console but not on screen
const fetchText = (path) => {
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
            return text;
        })
        .catch((err) => console.error(err));
}

export default fetchText;