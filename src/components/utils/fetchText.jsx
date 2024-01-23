const fetchText = (path) => {
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
            return text;
        })
        .catch((err) => console.error(err));
}

export default fetchText;