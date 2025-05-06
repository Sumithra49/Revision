
public class SpiralMatrix {
    public static void printSpiral(int m, int n) {
        int[][] matrix = new int[m][n];
        int value = 1;
        int top = 0, bottom = m - 1, left = 0, right = n - 1;

        while (top <= bottom && left <= right) {
            // Traverse from left to right across the top row
            for (int i = left; i <= right; i++) {
                matrix[top][i] = value++;
            }
            top++; // move top boundary down

            // Traverse downwards on the right column
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = value++;
            }
            right--; // move right boundary left

            if (top <= bottom) {
                // Traverse from right to left across the bottom row
                for (int i = right; i >= left; i--) {
                    matrix[bottom][i] = value++;
                }
                bottom--; // move bottom boundary up
            }

            if (left <= right) {
                // Traverse upwards on the left column
                for (int i = bottom; i >= top; i--) {
                    matrix[i][left] = value++;
                }
                left++; // move left boundary right
            }
        }

        // Print the matrix
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int m = 3, n = 3; // Example: 3x3 matrix
        printSpiral(m, n);
    }
}