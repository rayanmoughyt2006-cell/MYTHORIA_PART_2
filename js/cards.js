    let cards = async function getfetchdata() {
        let result = await fetch("./data/cards.json")
            .then(response => response.json())
            .then(data => { return data })
        return result;
    }
    const data = JSON.parse(localStorage.getItem("deck")) || [];
    export async function fixeData() {
        let allcards = await cards();
        let datas = allcards.filter(card =>
            data.some(item => String(item) === String(card.id))
        );
        return datas;
    }