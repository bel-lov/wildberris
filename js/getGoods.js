const getGoods = () => {
    fetch('/db/db.json').then(function (response) {
        console.log(response)
    })
}

getGoods()