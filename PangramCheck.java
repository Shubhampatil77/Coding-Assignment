public class PangramCheck {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();
        boolean[] alphabet = new boolean[26];
        int index;
        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if ('a' <= ch && ch <= 'z') {
                index = ch - 'a';
                alphabet[index] = true;
            }
        }
        for (boolean letter : alphabet) {
            if (!letter) {
                return false;
            }
        }
        return true;
    }
}
