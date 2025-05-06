import java.util.Scanner;

public class HourglassPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();

        // Top Half
        for (int i = n; i >= 1; i--) {
            // Spaces
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            // Stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Bottom Half
        for (int i = 2; i <= n; i++) {
            // Spaces
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            // Stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
// Enter number of rows: 4
// *******
// *****
// ***
// *
// ***
// *****
// *******