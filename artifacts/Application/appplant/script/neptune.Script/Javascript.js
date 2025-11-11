plantsListPage = 0
function goToPlantsList(){
        SetPlantList(0)
        App.to(PlantsList)

}
function goToPlantDetails(data){
DetailId.setText(data.id)
DetailTextCommumName.setText(data.common_name)
DetailTextURL.setText(data.regular_url)
DetailCommumName.setText(data.common_name)
DetailFamilyName.setText(data.family)
DetailListGroupItemFamily.setText("Family   :"+data.family)
DetailListGroupItAuthor.setText("Author    :"+ data.author)
DetailListGroupItemBibliography.setText("Bibliography    :"+data.bibliography)
DetailListGroupItemGenus.setText("Genus    :"+data.genus)
DetailListGroupItemYear.setText("Year discovery    :"+data.year)
DetailImage.setSrc(data.regular_url)

App.to(PlantDetails)
}
function goToFavorites(){
App.to(Favorites)
}
function goToHome(){
    App.to(HomePage)
}

function saveFavorite(plant){
fetch('http://localhost:8080/api/entity/favoritos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(plant) // converte objeto JS em JSON
})
.then(response => {
    if (!response.ok) {
        throw new Error("Erro ao salvar o favorito: " + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log("Favorito adicionado com sucesso:", data);
    // Aqui você pode mostrar uma mensagem de sucesso no UI5
    sap.m.MessageToast.show("Planta adicionada aos favoritos!");
})
.catch(error => {
    console.error("Erro:", error);
    sap.m.MessageToast.show("Erro ao adicionar aos favoritos!");
});
}

function SetPlantList(page){
    
    fetch('http://localhost:8080/api/serverscript/serverscript/plant-list-script-apt', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);

        // Cria um modelo JSON com os dados retornados
        const oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({ plants: data });

        // Cria dinamicamente uma lista
        const oList = PlantListList

        // Define o template de cada item da lista
        const oItemTemplate = new sap.m.StandardListItem({
            title: "{common_name}",
            description: "{family}",
            icon: {
                path: "regular_url",
                formatter: function(url) {
                    // Se não houver imagem, usa uma padrão
                    return url || "https://cdn-icons-png.flaticon.com/512/616/616408.png";
                }
            },
            type: "Navigation"
        });
        // Liga o modelo e o template à lista
        oList.setModel(oModel);
        oList.bindItems("/plants", oItemTemplate);
        const oPage = PlantsList;
        //oPage.removeAllContent();
        oPage.addContent(oList);

    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}