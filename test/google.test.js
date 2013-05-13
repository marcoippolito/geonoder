/**
 * Copyright (c) 2013 Alessio Placitelli - a.placitelli@a2p.it
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var assert = require('assert')
var geonoder = require('../lib/geonoder')

var plebiscitoAddress = 'Via del Plebiscito, 102, 00186 Rome, Italy'
var plebiscitoLat = 41.8965209
var plebiscitoLong = 12.4805225

describe('google', function() {

    it('fetches the latitude and longitude', function(done) {
        geonoder.toCoordinates(plebiscitoAddress, geonoder.providers.google, function(lat, long) {
            assert.equal(lat, plebiscitoLat)
            assert.equal(long, plebiscitoLong)
            done()
        })
    })

    it('fetches the address', function(done) {
        geonoder.toAddress(plebiscitoLat, plebiscitoLong, geonoder.providers.google, function(address) {
            assert.equal(address, plebiscitoAddress)
            done()
        })
    })
})
