const roster = [
    {
        id: 1,
        name: 'Blake Griffin',
        image: 'http://media.thehoopdoctors.com/wp-content/uploads/2015/05/griffin.jpg'
    },
    {
        id: 2,
        name: 'Deandre Jordan',
        image: 'http://static3.businessinsider.com/image/559d5a47eab8eaba3eeccdd9/the-clippers-are-begging-deandre-jordan-to-back-out-of-his-80-million-deal-with-the-mavericks-and-re-sign-with-them.jpg'
    },
    {
        id:3,
        name:  'Patrick beverley',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LmjGj5cz9Ag-F6bLtVVDYufztNjSIEG7avym0avHej3Fn-Tn'
    }
]

export function getRoster(){
    return roster;
}

export function getPlayer(id){
    return roster.find(player=> player.id == id);
}