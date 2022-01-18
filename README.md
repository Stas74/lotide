# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stas74/lotide`

**Require it:**

`const _ = require('@stas74/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: retrieve the first element from the array
* `tail(array)`: retrieve every element except the head (first element) of the array
* `middle(array)`: take in an array and return the middle-most element(s) of the given array
* `assertArraysEqual(array, array)`: writes an error message to the console if the assertion
* `assertEqual(actual, expected)`: console.log an appropriate message to the console.
* `assertObjectsEqual(object, object)`: take in two objects and console.log an appropriate message to the console.
* `countLetters(string)`: take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `countOnly(string)`: take in a string and return counts for a specific subset of those items
* `eqArrays(array, array)`: compare two arrays for a perfect match
* `eqObjects(object, object)`: take in two objects and returns true or false, based on a perfect match
* `findKey(object, callback)`: takes in an object and a callback. scan the object and return the first key for which the callback returns a truthy value.If no key is found, then it should return undefined.
* `findKeyByValue(object)`:search for a key on an object where its value matches a given value
* `letterPositions(string)`:  return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: The map function will return a new array based on the results of the callback function
* `reverse(string)`: reversing string
* `takeUntil(array, callback)`: the callback should only be provided one value: The item in the array
* `without(array, array)`:  take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.