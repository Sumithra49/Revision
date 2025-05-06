public class pascal {
    public static int[][] generatePascalTriangle(int numRows) {
        int[][] triangle = new int[numRows][numRows];

        for (int row = 0; row < numRows; row++) {
            // First and last elements in each row are 1
            triangle[row][0] = 1;
            triangle[row][row] = 1;

            // Middle elements are sum of two values from above row
            for (int col = 1; col < row; col++) {
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
            }
        }

        return triangle;
    }

    public static void printTriangle(int[][] triangle, int numRows) {
        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col <= row; col++) {
                System.out.print(triangle[row][col] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int numRows = 5;
        int[][] triangle = generatePascalTriangle(numRows);
        printTriangle(triangle, numRows);
    }
}

// output
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1