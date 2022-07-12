
/*
                Задача 4: Напишите программу, которая принимает на вход три числа и выдаёт максимальное из этих чисел.

            2, 3, 7 -> 7
            44 5 78 -> 78
            22 3 9 -> 22


*/

    Console.Write("Введите ПЕРВОЕ число: ");
    int NumberA = Convert.ToInt32(Console.ReadLine());
    Console.Write("Введите ВТОРОЕ число: ");
    int NumberB = Convert.ToInt32(Console.ReadLine());
    Console.Write("Введите ТРЕТЬЕ число: ");
    int NumberC = Convert.ToInt32(Console.ReadLine());
    
    if (NumberA > NumberB)
    {
        if (NumberA > NumberC) Console.Write($"Максимальное значение: {NumberA}");
        else if (NumberC > NumberA) Console.Write($"Максимальное значение: {NumberC}");
    }
    else if (NumberB > NumberC) Console.Write($"Максимальное значение: {NumberB}");
    else if (NumberC > NumberB) Console.Write($"Максимальное значение: {NumberC}");
    
  

 
