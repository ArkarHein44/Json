export function LiElements(){
    const newli = (data)=>{
        
        const whenago = dateFns.formatDistance(data.created_at.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago

        const html = `
            <li class="shadow-lg rounded-lg py-2 px-4">
                <div class="flex justify-between">
                    <h5 class="text-gray-600 font-medium text-sm">${data.username}</h5>
                    <i class="text-gray-300 text-sm">${whenago}</i>
                </div>

                <p class="text-gray-600 text-sm">${data.nessage}</p>
            </li>
        `;

        chatul.innerHTML += html;
    }

    return {newli};
}


