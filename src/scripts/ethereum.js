import detectEthereumProvider from '@metamask/detect-provider';

const getBlockchain = () =>
    new Promise(async (resolve, reject) => {

        let provider = await detectEthereumProvider();

        if (provider) {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            console.log('Ethereum successfully detected!')

            resolve({
                accounts,
            });

            return ({
                accounts,
            });
        } else if (!provider) {
            alert('Install Metamask');
        }
        reject('Install Metamask');
    });

export default getBlockchain;