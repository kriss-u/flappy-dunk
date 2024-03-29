class Animator {
  constructor(frameSet, delay, mode = 'loop') {
    this.count = 0;
    this.delay = delay >= 1 ? delay : 1;
    this.frameSet = frameSet;
    this.frameIndex = 0;
    this.frameValue = frameSet[0];
    this.mode = mode;
  }
  animate() {
    switch (this.mode) {
      case 'loop':
        this.loop();
        break;
      case 'pause':
        break;
    }
  }
  changeFrameSet(frameSet, mode, delay = 10, frameIndex = 0) {
    if (this.frameSet === frameSet) {
      return;
    }
    this.count = 0;
    this.delay = delay;
    this.frameSet = frameSet;
    this.frameIndex = frameIndex;
    this.frameValue = this.frameValue;
    this.mode = mode;
  }
  loop() {
    this.count++;
    while (this.count > this.delay) {
      this.count -= this.delay;
      this.frameIndex = this.frameIndex < this.frameSet.length - 1 ? this.frameIndex + 1 : 0;
      this.frameValue = this.frameSet[this.frameIndex];
    }
  }
}