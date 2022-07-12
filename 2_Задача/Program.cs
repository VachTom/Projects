 /*Задача 2: Напишите программу, которая на вход принимает два числа и выдаёт, какое число большее, а какое меньшее.

                    a = 5; b = 7 -> max = 7
                    a = 2 b = 10 -> max = 10
                    a = -9 b = -3 -> max = -3

*/

    Console.Write("Введите ПЕРВОЕ число: ");
    int NumberA = Convert.ToInt32(Console.ReadLine());
    Console.Write("Введите ВТОРОЕ число: ");
    int NumberB = Convert.ToInt32(Console.ReadLine());
    
    if (NumberA > NumberB) Console.Write($"Максимальное значение: {NumberA}");
    else Console.Write($"Максимальное значение: {NumberB}");