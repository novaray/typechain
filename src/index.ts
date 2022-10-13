import crypto from 'crypto';

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;   // 블록의 위치를 표시하는 숫자.
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];
  
  constructor() {
    this.blocks = [];
  }
  
  private getPrevHash() {
    if (this.blocks.length === 0) {
      return '';
    }
    
    return this.blocks[this.blocks.length - 1].hash;
  }
  
  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  
  public getBlocks() {
    // private 데이터를 리턴하는 건 보안에 굉장히 취약하므로(안 좋은 방식), 새로운 데이터를 리턴해주는 것이 좋다.
    // return this.blocks;
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('First one');
blockchain.addBlock('Second one');
blockchain.addBlock('Third one');

console.log(blockchain.getBlocks());
