// importando dependências
const bip32 = require('bip32')   // Biblioteca para trabalhar com chaves HD (Hierarchical Deterministic)
const bip39 = require('bip39')   // Biblioteca para gerar e manipular mnemônicos (frases de recuperação)
const bitcoin = require('bitcoinjs-lib')   // Biblioteca para operações com Bitcoin, como criação de endereços e transações

// Definindo a rede

// Rede Principal -> mainnet
// const network = bitcoin.networks.bitcoin   // Para a rede principal do Bitcoin (mainnet)

// Rede de Testes -> Testnet
const network = bitcoin.networks.testnet   // Para a rede de testes do Bitcoin (testnet)

// Derivação de carteiras Hierárquicas Determinísticas (HD)
const path = `m/49'/1'/0'/0` // Caminho de derivação para a Testnet, 
// const path = `m/49'/0'/0'/0` // Caminho de derivação para a mainnet

// Criando o mnemonic para a seed (conjunto de palavras de senha)
let mnemonic = bip39.generateMnemonic()   // Gera uma frase mnemônica aleatória
const seed = bip39.mnemonicToSeedSync(mnemonic)   // Converte a frase mnemônica em uma seed (semente)

// Criando a raiz da carteira Hierarchical Deterministic
let root = bip32.fromSeed(seed, network)   // Cria uma raiz de carteira HD a partir da seed e da rede

// Criando uma conta - par private-public keys
let account = root.derivePath(path)   // Deriva uma conta a partir da raiz da carteira usando o caminho especificado
let node = account.derive(0).derive(0)   // Deriva um par chave pública e chave privada

// Gerando o endereço Bitcoin a partir da chave pública
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,   // Usa a chave pública derivada
    network: network,   // Especifica a rede (testnet ou mainnet)
}).address

// Resultados
console.log("Address: ", btcAddress)   // Mostra o endereço Bitcoin gerado
console.log("Private Key: ", node.toWIF())   // Mostra a chave privada no formato Wallet Import Format (WIF)
console.log("Seed: ", mnemonic)   // Mostra a frase mnemônica usada para gerar a seed
