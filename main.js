
const fetchCategoriesData = (url) => {
      fetch(url)
            .then(res => res.json())
            .then(data => displayCategories(data.categories))
            .catch(eror => console.log(eror))
}

const catagoryUrl = 'https://openapi.programming-hero.com/api/phero-tube/categories'
fetchCategoriesData(catagoryUrl)


const displayCategories = (datas) => {
      const categoriesBtns = document.getElementById('catagoryBtns')
      datas.forEach(catagory => {
            const btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = catagory.category
            categoriesBtns.appendChild(btn)
            console.log(catagory.category);

      });

}