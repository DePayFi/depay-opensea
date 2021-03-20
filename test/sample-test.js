const { ethers } = require('hardhat')
const { abi } = require('./abi')
let nft
describe('TEST', function () {
  before(async () => {
    const Opensea = await ethers.getContractFactory('Opensea')
    opensea = await Opensea.deploy('0x7be8076f4ea4a4ad08075c2508e481d6c946d12b')
    const Nft = await ethers.getContractFactory('ERC1155')
    nft = Nft.attach('0x495f947276749ce646f68ac8c248420045cb7b5e')
  })
  it('test', async function () {
    let balance = await nft.balanceOf(
      '0x317d875ca3b9f8d14f960486c0d1d1913be74e90',
      '35347623114821255323888368639026081793120226253597860997754787919489216283624'
    )
    console.log('balance', balance)
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: ['0x317d875ca3b9f8d14f960486c0d1d1913be74e90'],
    })
    const signer = await ethers.provider.getSigner('0x317d875ca3b9f8d14f960486c0d1d1913be74e90')
    const contract = new ethers.Contract('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', abi, signer)
    await contract.setApprovalForAll(opensea.address, true)
    opensea.execute(
      [],
      [
        '0',
        '250',
        '0',
        '0',
        '10000000000000000',
        '0',
        '1616148717',
        '1616753607',
        '23590926962634386495281931527890599411224006981444741764162139642869221240965',
        '0',
        '250',
        '0',
        '0',
        '10000000000000000',
        '0',
        '1616235434',
        '0',
        '43955265446120024804015554202386418381293804425616133098851824890402704051806',
        '1',
        '0',
        '0',
        '0',
        '1',
        '1',
        '0',
        '0',
        '28',
        '28',
        '35347623114821255323888368639026081793120226253597860997754787919489216283624',
      ],
      [
        '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b',
        '0x08B277154218CCF3380CAE48d630DA13462E3950',
        '0x0000000000000000000000000000000000000000',
        '0x5b3256965e7C3cF26E11FCAf296DfC8807C01073',
        '0x495f947276749Ce646f68AC8c248420045cb7b5e',
        '0x0000000000000000000000000000000000000000',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b',
        '0x317D875cA3B9f8d14f960486C0d1D1913be74e90',
        '0x08B277154218CCF3380CAE48d630DA13462E3950',
        '0x0000000000000000000000000000000000000000',
        '0x495f947276749Ce646f68AC8c248420045cb7b5e',
        '0x0000000000000000000000000000000000000000',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        '0x495f947276749ce646f68ac8c248420045cb7b5e',
        '0x317d875ca3b9f8d14f960486c0d1d1913be74e90',
      ],
      [
        '0xf242432a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008b277154218ccf3380cae48d630da13462e39504e260bb2b25ec6f3a59b478fcde5ed5b8d783b020000000000000300000003e8000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000',
        '0xf242432a000000000000000000000000317d875ca3b9f8d14f960486c0d1d1913be74e9000000000000000000000000000000000000000000000000000000000000000004e260bb2b25ec6f3a59b478fcde5ed5b8d783b020000000000000300000003e8000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000',
        '0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '',
        '',
        '0xe94d249b43d6f8cc28b9f3fe640802414748a8fcefa37c06046989e2d6480dc5',
        '0x057d37759969fc2e31b2856e395a030161725a5d2b482d0a31f69b21000ce7e1',
        '0xe94d249b43d6f8cc28b9f3fe640802414748a8fcefa37c06046989e2d6480dc5',
        '0x057d37759969fc2e31b2856e395a030161725a5d2b482d0a31f69b21000ce7e1',
        '0x0c7f6405bf7299a9ebdccfd6841feac6c91e5541000000000000000000000000',
      ]
    )
    balance = await nft.balanceOf(
      '0x317d875ca3b9f8d14f960486c0d1d1913be74e90',
      '35347623114821255323888368639026081793120226253597860997754787919489216283624'
    )
    console.log('balance2', balance)
  })
})
