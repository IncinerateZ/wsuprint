window.onload = () => {
    document.getElementById('hide').onclick = () => {
        axios
            .get('https://discordbot.incineratez.repl.co/dbclear')
            .then((res) => {
                window.location.reload();
                console.log('Cleared');
            });
    };

    //retrieve documents
    axios
        .get('https://discordbot.incineratez.repl.co/dbtest')
        .then((res) => {
            let documents = res.data.body.split(',');
            console.log(documents);
            if (res.data.body.length === 0)
                document.getElementById('status').innerText = 'NO DOCUMENTS';
            else {
                document.getElementById('status').innerText =
                    'DOCUMENTS RETRIEVED';
                document.getElementById('hide').id = '';
                let list = document.getElementById('list');
                for (let doc of documents) {
                    if (doc === '') continue;
                    let li = document.createElement('li');
                    let a = document.createElement('a');
                    a.href = doc;

                    let link = doc.split('/');
                    link = link[link.length - 1];

                    a.innerText = link;

                    li.appendChild(a);
                    list.appendChild(li);
                }
            }
        })
        .catch((err) => {
            console.log(err);
            document.getElementById('status').innerText =
                'UNABLE TO RETRIEVE DOCUMENTS AT THIS TIME';
        });
};
