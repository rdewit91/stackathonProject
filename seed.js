const {db} = require('./server/db')

const Student = require('./server/db/models/student');
const Campus = require('./server/db/models/campus')

const students = [
  {
      firstName: 'kevin',
      lastName: 'sackie',
      email: 'gefixof2749@laserlip.com',
      imageUrl: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/128391/128391_00_2x.jpg',
      gpa: 2.8,
  },
  {
    firstName: 'jackie',
    lastName: 'holland',
    email: 'gefixof860@laserlip.com',
    imageUrl: 'https://media.istockphoto.com/id/1340766096/photo/beautiful-smiling-female-college-student.jpg?b=1&s=170667a&w=0&k=20&c=uD2IggDQwHnwaXOzudlvaZ57QjCiUsQIIDoZ5Wrr6zA=',
    gpa: 3.2,
  },
  {
    firstName: 'rolland',
    lastName: 'jovin',
    email: 'gefixof901@laserlip.com',
    imageUrl: 'https://media.istockphoto.com/id/1384332904/photo/laughing-young-man.jpg?b=1&s=170667a&w=0&k=20&c=B6HVCds1qWbOVRiPg5Ung7pSelkCTnpyJeGGsObzXSA=',
    gpa: 2.9,
  }
];

const campuses = [
  {
      name: 'Elk Creek University',
      imageUrl: 'https://www.lamudi.com.ph/journal/wp-content/uploads/2014/03/generic-university.jpg',
      address: '5234 Silver Trl Grand Prairie, TX, 75052',
      description: 'lorem ipsem',
  },
  {
    name: 'Mountain Oak University',
    imageUrl: 'https://www.cpbj.com/files/2018/09/generic-university-bldg.jpg',
    address: '652 Oberg Dr, Freeport, PA, 16229',
    description: 'lorem ipsem',
  },
  {
    name: 'Lakeside Technical University',
    imageUrl: 'https://whyy.org/wp-content/uploads/2020/10/university_of_delaware_generic_102220.jpg',
    address: '4127 N County 300 Rd W, Paoli, IN, 47454',
    description: 'lorem ipsem',
  }
];



const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));

    console.log(('Seed Pass'))
    db.close()
  }
  catch (err) {
    console.error(('Seed Fail'))
    console.error(err)
    db.close()
  }
}

seed();