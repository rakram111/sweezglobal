const contractAddress = 'TPsZmo9JSxaTZzUEwiMFvANveorSyvjQ4P'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;