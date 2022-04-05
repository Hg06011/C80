name_of_student_Array = [];

function submit() 
{

var display_student_name = [];
for( var id = 1; id<= 4; id++)
{
    var name_of_student = document.getElementById("name_of_the_student_"+ id).value;
    console.log(name_of_student);
    name_of_student_Array.push(name_of_student);
}
console.log(name_of_student);
var lenght_of_the_student_array = name_of_student_Array.lenght;
console.log(lenght_of_the_student_array);

for(var k = 0; k<lenght_of_the_student_array; k++)
{
    display_student_name.push("<h4>name-" + name_of_student_Array[k] + "</h4>");
    console.log(display_student_name);
}
console.log(display_student_name);

document.getElementById("display_name_with_commas").innerHTML=display_student_name;
var remove_commas = display_student_name.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML= remove_commas;
document.getElementById("submit_button").style.display ="none"; 
document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_student_Array.sort();
    console.log(name_of_student_Array);
    var display_student_array_sorting =[];
    var lenght_of_the_student_array = name_of_student_Array.lenght;
    console.log(lenght_of_the_student_array );
    for(var i=0; i<lenght_of_the_student_array; i++)
    {
     display_student_array_sorting.push("<h4>Name"+  name_of_student_Array[i] +"</h4>");
console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}