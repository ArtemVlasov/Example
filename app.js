
const minis =(name, model, army, owner,phone, image)=>({name, model, army, owner,phone, image});
const log=(text, type, date = new Date())=>({text, type, date});

const miniatures =[
   minis ('Dread scythe ', 'nighthaunt','death', 'Max', '+380931234567',  'images/99120207067_DreadscytheHarrridans01.jpg'),
    minis ('Revenants', 'noble','death', 'Alex', '+380931236785',  'images/99120207066_BladegheistRevenants01.jpg'),
    minis ('Chainrasps', 'ghoust','death', 'Vlad', '+380931234987',  'images/99120207059_ETBChainrasps02.jpg')
];


new Vue({
    el: '#app',
    data: {
        miniatures: miniatures,
        minis: miniatures[0],
        logs: [],
        selectedMinisIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility : false
    },
    methods: {
        selectCar(index) {
            this.minis = miniatures[index];
            this.selectedMinisIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.minis.name}- ${this.minis.model}`, 'ok')
            )
    },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.minis.name}- ${this.minis.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show phone'
        },
        filtredMinis() {
            return this.miniatures.filter(minis => {
                return minis.name.indexOf(this.search) > -1 || minis.model.indexOf(this.search) > -1
            })
        }
    },
    filters:{
        date(value){
            return value.toLocaleString()
        }
    }
})