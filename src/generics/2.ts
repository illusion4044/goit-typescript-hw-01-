type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  }
  
  type PickNameAndColor = Pick<AllType, 'name' | 'color'>;
  type PickPositionAndWeight = Pick<AllType, 'position' | 'weight'>;
  

  function compare(
    top: PickNameAndColor,
    bottom: PickPositionAndWeight
  ):AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }
  

  const obj1 = {
    name: 'Object1',
    position: 1,
    color: 'red',
    weight: 10,
    extraField: 'extra'
  };
  
  const obj2 = {
    name: 'Object2',
    position: 2,
    color: 'blue',
    weight: 20,
    anotherField: 'another' 
  };
  
  const result = compare(obj1, obj2);
  console.log(result);
  