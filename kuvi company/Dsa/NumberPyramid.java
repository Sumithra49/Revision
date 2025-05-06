import java.util.Scanner;

public class NumberPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            // Print spaces to center the numbers
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  "); // 2 spaces for alignment
            }

            // Print numbers increasing from 1 to i
            for (int k = 1; k <= i; k++) {
                System.out.print(k + " ");
            }

            // Print numbers decreasing from i - 1 to 1
            for (int l = i - 1; l >= 1; l--) {
                System.out.print(l + " ");
            }

            System.out.println();
        }
    }
}
// Enter number of rows: 4
1 1 2 1 1 2 3 2 1 1 2 3 4 3 2 1