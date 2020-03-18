export const handleDropDown = (id) => {
    let idDropdown = document.getElementById(id);
    if(idDropdown.style.height === 200 + 'px'){
        idDropdown.style.height = 0 + 'px';
        idDropdown.style.display = 'none' ;

    } else {
        idDropdown.style.height = 200 + 'px'
        idDropdown.style.display = 'flex' ;
    }

}
export const handleUploadImage = imageValue => {
    const url = 'https://shop-shoe-database.herokuapp.com';
    if(imageValue){
        return url + imageValue
    }
}