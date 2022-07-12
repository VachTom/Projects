/*Задача 8: Напишите программу, которая на вход принимает число (N), а на выходе показывает все чётные числа от 1 до N.

5 -> 2, 4
8 -> 2, 4, 6, 8
*/



Console.Write("Введите число: ");
int Number = Convert.ToInt32(Console.ReadLine());


while (Number >= 1)
{
   if (Number % 2 == 0) 
   {
        Console.Write(Number + " ");
        Number = Number - 1;
    }

   else 
   {
        Number = Number - 1;
    }
}

Console.WriteLine("");

