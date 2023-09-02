
import java.util.*;

class SummaryRanges {
    private Set<Integer> set;

    public SummaryRanges() {
        set = new TreeSet<>();
    }

    public void addNum(int value) {
        set.add(value);
    }

    public int[][] getIntervals() {
        List<int[]> res = new ArrayList<>();
        for (int n : set) {
            int size = res.size();
            if (size > 0 && res.get(size - 1)[1] + 1 == n) {
                res.get(size - 1)[1] = n;
            } else {
                res.add(new int[] { n, n });
            }
        }
        return res.toArray(new int[0][]);
    }
}

/*
 * In this Question i just have to find the ranges thats it
 * 
 * [1,2,3,5,6,8,9] ranges will be simply [1,6] , [8,9] like this
 * just we need an Sortedarray and also duplicates are not allowed nothing more
 * than this so we will just
 * 
 * so we used the treeSet for adding thats it
 ***
 * 
 * 
 * 
 * Java Specific
 * 
 * to changing this
 * List<Int [] > ans = new ArrayList<>() to 2-dimensional array we will just
 * going to update
 * 
 * ans.toArray(new int[0][]) that's it
 * 
 */
