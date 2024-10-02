
const fetchCategoriesData = (url) => {
      fetch(url)
            .then(res => res.json())
            .then(data => displayCategories(data.categories))
            .catch(eror => console.log(eror))
}
const fetchContentData = (url) => {
      fetch(url)
            .then(res => res.json())
            .then(data => displayContent(data.videos))
            .catch(eror => console.log(eror))
}

const catagoryUrl = 'https://openapi.programming-hero.com/api/phero-tube/categories'
const contentDataUrl = 'https://openapi.programming-hero.com/api/phero-tube/videos'
fetchCategoriesData(catagoryUrl)
fetchContentData(contentDataUrl)
const getTime = (time) => {

      if (time === 704800) {
            return `1 month ego`
      }
      else if (time >= 604800) {

            return `1 week ago`
      }
      else if (time >= 86400) {
            const day = parseInt(time / 86400)
            const remeningsecnd = time % 86400
            const hours = parseInt(remeningsecnd / 3600);
            const remeningsecnd2 = time % 3600
            const minute = parseInt(remeningsecnd2 / 60)
            const secend = time % 60;
            return `${day} day ${hours} hour ${minute} minute `
      }
      else {
            const hours = parseInt(time / 3600);
            const remeningsecnd = time % 3600
            const minute = parseInt(remeningsecnd / 60)
            const secend = time % 60;
            return `${hours} hour ${minute} minute`
      }


}

const displayCategories = (datas) => {
      const categoriesBtns = document.getElementById('catagoryBtns')
      datas.forEach(catagory => {
            const btn = document.createElement('button')
            btn.classList = "px-4 py-1 bg-gray-200 rounded btn"
            btn.innerText = catagory.category
            categoriesBtns.appendChild(btn)
            // console.log(catagory.category);

      });

}

const displayContent = (data) => {
      const contentSection = document.getElementById('content')
      data.forEach(content => {
            const videoCard = document.createElement('div')
            videoCard.innerHTML = `
            <div class=" relative">
                       <img class=" h-52 w-full rounded-lg" src="${content.thumbnail}" alt="">
                       
                       <p class=" bg-black bg-opacity-50 text-white absolute  right-4 bottom-28 px-3">${content.others.posted_date.length == 0 ? '' : getTime(content.others.posted_date)}</p>
                       <div class=" flex items-center gap-4 mt-2 ">
                        <div class=" border border-gray-400 w-12 h-12 rounded-full overflow-hidden"> 
                         <img class=" w-12 h-12" src="${content.authors[0].profile_picture}">
                        </div>
                        <h1 class=" text-xl font-bold">${content.title}</h1>
                       </div>
                  <div class=" text-gray-600  font-semibold"> 
                  <div class=" flex items-center gap-2"><p>${content.authors[0].profile_name} </p>
                   ${content.authors[0].verified === true ? `<img class=" w-5" src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" >` : ''}
                  </div>
                  <p>${content.others.views} <span></span></p>

                  </div>
            </div>
            `
            console.log(content);
            contentSection.appendChild(videoCard)

      })
}