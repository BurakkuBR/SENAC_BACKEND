function checkIdRenewal():boolean {


   const currentYear = Number(prompt("Digite o ano atual"))
   const birthYear = Number(prompt("Digite o ano de nascimento"))
   const dateOfIssuance = Number(prompt("Digite o ano de emissão do documento"))

   const age = currentYear - birthYear
   const driverLicenseTime = currentYear - dateOfIssuance

   const cond1 = age <= 20 && driverLicenseTime >= 5
   const cond2 = age > 20 && age <= 50 && driverLicenseTime >= 10
   const cond3 = age > 50 && driverLicenseTime >= 15

   return (cond1 || cond2 || cond3)
}