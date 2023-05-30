// function setMaterials(){
//     let tbody = document.querySelector('table tbody')
//     tbody.innerHTML = ''
//     JSON.parse(localStorage.getItem('materials')).forEach((a,i)=>{
//         tbody.innerHTML += `
//         <tr data-index="${i}" >
//             <td> <span> ${a.name} </span></td>
//             <td class='price'>${a.price}</td>
//             <td>${a.date == '' ? returntime() : a.date}</td>
//         </tr>
//         `
//     })

//     setCardinfo()
    
    
// }
// setMaterials()
// setInterval(setMaterials,4000)


// function setCardinfo(){

//     let materials = JSON.parse(localStorage.getItem('materials'))
//     let arr = []
//     materials.forEach((a,i)=>{
//         arr.push(eval(materials[i].price))
//     })
    
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     }
//     max = max == -Infinity	? 0 : max.toFixed(2)
//     min = min == Infinity ? 0 : min.toFixed(2)
//     sum = arr.length == 0 ? 'لا توجد عناصر لحساب المتوسط' : sum / arr.length

    
//     let highmaterial = 0
//     let lowmaterial = 0
//     materials.forEach((a,i)=>{
//         if(a.price === max){
//             highmaterial = i
//         }

//         if(a.price === min){
//             lowmaterial = i
//         }
//     })

//     document.querySelector('.showinfo .highprice .span').innerHTML = max
//     document.querySelector('.showinfo .highprice .name').innerHTML = materials[highmaterial].name
//     document.querySelector('.showinfo .lowprice .span').innerHTML = min
//     document.querySelector('.showinfo .lowprice .name').innerHTML = materials[lowmaterial].name
//    document.querySelector('.showinfo .average .span').innerHTML = sum.toFixed(2)

// }