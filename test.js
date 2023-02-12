const obj = {
  a : 1,
  experiences: [
    {
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      start: '2018-01-01',
    }
  ]
}

console.log(obj.experiences.forEach((item) => console.log(item.title)))