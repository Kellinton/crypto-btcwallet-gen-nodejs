
## Description

Application to generate Bitcoin wallets using wallets (HD). It creates Bitcoin addresses and private keys from a randomly generated mnemonic phrase. The application supports both the main Bitcoin network (mainnet) and the test network (testnet).

## Dependencies

- `bip32`: Library for working with HD (Hierarchical Deterministic) keys.
- `bip39`: Library to generate and manipulate mnemonics (recovery phrases).
- `bitcoinjs-lib`: Library for Bitcoin operations, such as creating addresses and transactions.

## Installation

Clone the repository and install the dependencies with the following command:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
npm install
```
## Usage

To generate a new Bitcoin wallet, navigate to the src folder "cd .\src\", and run the following command:

```bash
node .\createWallet.js
```
This will generate a new mnemonic phrase, a private key and a corresponding Bitcoin address, which will be displayed in the console.

## Exit

```bash
Address: <BITCOIN_ADDRESS>
Private Key: <PRIVATE_WIF_KEY>
Seed: <MNEMONICA_PHRASE>
```

## Network Configuration

Mainnet: To generate addresses on the Bitcoin mainnet, uncomment the line const network = bitcoin.networks.bitcoin.

Test Network (Testnet): To generate addresses on the Bitcoin test network, use the line const network = bitcoin.networks.testnet (default setting).

## Notes

Security: Keep your private key and mnemonic phrase in a safe place and never share it with third parties. Control over the private key implies control over the funds associated with the address.

Testnet vs. Mainnet: Use testnet for development and testing without financial risk. Mainnet must be used for real transactions and with real funds.

## Contributions
Contributions are welcome! Please open an issue or submit a pull request with improvements or corrections. If you find a bug or have suggestions for improvements, feel free to contribute to the project.