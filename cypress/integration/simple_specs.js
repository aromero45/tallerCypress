describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Los estudiantes crear cuenta', function() {
    it('Visits los estudiantes register', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alex")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Romero")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("a.romero4@uniandes.edu.co")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').contains('Registrarse').click()
    })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and success at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("a.romero4@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        //cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Los estudiantes crear cuenta ya existente', function() {
    it('Visits los estudiantes fails at register', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alex")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Romero")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("a.romero4@uniandes.edu.co")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Error: Ya existe un usuario registrado con el correo')
        cy.contains('Ok').click()
    })
})

describe('Los estudiantes buscar profesor',function(){
     it('Visits los estudiantes, search teacher', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('input').focus().type("Kelly Garces",{force:true})
      })
})
describe('Los estudiantes ir a la pagina de un profesor',function(){
     it('Visits los estudiantes, go to teacher page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('input').focus().type("Kelly Garces",{force:true})
        cy.get('[id^="react-select-"]').eq(1).contains("Kelly Johany Garces Pernett").click()
      })
})
describe('Los estudiantes filtrar por Materia',function(){
     it('Visits los estudiantes,filter by title', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/kelly-johany-garces-pernett')
        cy.get('.statsProfesorDropdownItemChecked').find('input[name="id:MISO-4202"]').check()
      })
})
