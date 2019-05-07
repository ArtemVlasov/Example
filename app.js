
const minis =(name, model, army, owner,phone, image)=>({name, model, army, owner,phone, image});


const miniatures =[
   minis ('Dread scythe Harrridans', 'nighthaunt','death', 'Max', '+380931234567',  'images/99120207067_DreadscytheHarrridans01.jpg'),
    minis ('Bladegheist Revenants', 'nighthaunt','death', 'Alex', '+380931236785',  'images/99120207066_BladegheistRevenants01.jpg'),
    minis ('Chainrasps', 'nighthaunt','death', 'Vlad', '+380931234987',  'images/99120207059_ETBChainrasps02.jpg')
];


new Vue({
el:'#app',
    data:{
        miniatures : miniatures,
        minis: miniatures[0],
        selectedMinisIndex: 0,
        phoneVisibility: false
    },
    methods:{
        selectCar: function(index){
            console.log('click',index);
            this.minis = miniatures[index];
            this.selectedMinisIndex = index
        }
    }
});