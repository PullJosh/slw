// @flow

let ___

// SUPER LIAM WORLD(tm)
// totally not stolen from an-ok-squirrel.
// this is a fair use of the name as specified
// in NANALAND RULES NUMBER #99

const trimLines = require('trim-lines')

class SLW {
  constructor() {
    this.keys = {}

    this.canvas = document.createElement('canvas')
    this.canvas.width = 256
    this.canvas.height = 256

    this.canvas.addEventListener('keydown', evt => {
      this.keys[evt.keyCode] = true
    })
    this.canvas.addEventListener('keyup', evt => {
      this.keys[evt.keyCode] = false
    })

    this.canvas.setAttribute('tabindex', 1)

    this.playerX = 0
    this.playerY = 0

    this.cameraX = 0
    this.cameraY = 0

    this.tileSize = 30

    this.activeLevel = {
      tiles: trimLines`--------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       --------------------
                       ----------=?=-------
                       ------=-------------
                       -----===------------
                       ----=====-----------
                       =================---`
    }
  }

  canvasClear() {
    const ctx = this.canvas.getContext('2d')
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  getDrawnPosition(tileX, tileY) {
    // Fill in the blanks!
    return [tileX * 16, tileY * 16]
  }

  drawLevelTiles() {
    const rows = this.activeLevel.tiles.split('\n')

    const ctx = this.canvas.getContext('2d')

    // Fill in the blanks!
    const viewStartX = 0
    const viewStartY = 0
    const viewEndX = 16
    const viewEndY = 16

    for (let y = viewStartY; y < viewEndY; y++) {
      for (let x = viewStartX; x < viewEndX; x++) {
        let row = rows[y] || ''
        let tile = row[x] || ''

        if (tile === '-') {
          ctx.fillStyle = 'red'
        } else if (tile === '=') {
          ctx.fillStyle = 'green'
        } else {
          ctx.fillStyle = 'orange'
        }

        const [rendX, rendY] = this.getDrawnPosition(x, y)
        ctx.fillRect(rendX, rendY, 16, 16)
      }
    }

    ctx.fillStyle = 'blue'
    const [pRendX, pRendY] = this.getDrawnPosition(this.playerX, this.playerY)
    ctx.fillRect(pRendX, pRendY, 16, 16)

    console.log(
      // 'Looped tiles:', (viewEndX - viewStartX) * (viewEndY - viewStartY)
    )
  }
}

module.exports = SLW
