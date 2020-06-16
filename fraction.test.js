import {test} from './fraction';
import {Fraction} from './fraction';
import {addFraction} from './fraction';

/* implémentation avec class Object*/

it('function test should return true when called', function (){
    expect(test()).toBe('true');
})

it('fraction(2,1) should equal {a:2, b:1}', function(){
    const newFraction = new Fraction(2,1);
    expect(newFraction).toEqual({a: 2, b:1})
})

it('fraction(2,1).result should equal 2', function(){
    const newFraction = new Fraction(2,1);
    expect(newFraction.result()).toBe(2)
})

it('sum of fraction(2,1) and fraction(3,1) sould equal 5', function(){
    const newFraction = new Fraction(2,1).add(3,1);
    expect(newFraction.result()).toEqual(5)
})

it('gcb of sum (2,1) and (3,1) : 5/1 should be 1', function(){
    const newFraction = new Fraction(2,1).add(3,1);
    expect(newFraction.gcb()).toEqual(1)
})

it('1/2 should be written 1/2 when reduced', function(){
    const newFraction = new Fraction (1,2)
    expect(newFraction.reduced()).toBe('1/2')
})

it('4/8 reduced should return 1/2', function(){
    const newfraction = new Fraction(4,8)
    expect(newfraction.reduced()).toBe('1/2')
})

/* implémentation avec function Fraction*/


